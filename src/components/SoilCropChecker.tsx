
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { soilTypes } from '@/data/soilData';
import { crops, checkCropSoilCompatibility } from '@/data/cropData';

const SoilCropChecker = () => {
  const [selectedSoil, setSelectedSoil] = useState<string>("");
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const [result, setResult] = useState<{ compatible: boolean; reasons: string[] } | null>(null);

  const checkCompatibility = () => {
    if (selectedSoil && selectedCrop) {
      const compatibilityResult = checkCropSoilCompatibility(selectedCrop, selectedSoil);
      setResult(compatibilityResult);
    }
  };

  const handleSoilChange = (value: string) => {
    setSelectedSoil(value);
    setResult(null);
    if (selectedCrop) {
      setTimeout(() => {
        checkCompatibility();
      }, 100);
    }
  };

  const handleCropChange = (value: string) => {
    setSelectedCrop(value);
    setResult(null);
    if (selectedSoil) {
      setTimeout(() => {
        checkCompatibility();
      }, 100);
    }
  };

  const selectedSoilData = soilTypes.find(soil => soil.id === selectedSoil);
  const selectedCropData = crops.find(crop => crop.id === selectedCrop);

  return (
    <div id="soil-crop" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Soil & Crop Compatibility Checker</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="soil-pattern">
            <CardHeader>
              <CardTitle>Select Soil Type</CardTitle>
              <CardDescription>Choose your soil type to check compatibility</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleSoilChange}>
                <SelectTrigger className="bg-white/90">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  {soilTypes.map((soil) => (
                    <SelectItem key={soil.id} value={soil.id}>
                      {soil.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedSoilData && (
                <div className="mt-6 animate-fade-in">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedSoilData.imageUrl} 
                      alt={selectedSoilData.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{selectedSoilData.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{selectedSoilData.description}</p>
                  <div className="mt-3">
                    <p className="text-sm font-medium">Characteristics:</p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      {selectedSoilData.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">pH Range: {selectedSoilData.ph.min} - {selectedSoilData.ph.max}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Crop</CardTitle>
              <CardDescription>Choose a crop to check compatibility with selected soil</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleCropChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  {crops.map((crop) => (
                    <SelectItem key={crop.id} value={crop.id}>
                      {crop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedCropData && (
                <div className="mt-6 animate-fade-in">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedCropData.imageUrl} 
                      alt={selectedCropData.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{selectedCropData.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{selectedCropData.description}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Water Needs:</p>
                      <p className="text-sm capitalize">{selectedCropData.waterNeeds}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sunlight:</p>
                      <p className="text-sm capitalize">{selectedCropData.sunlightNeeds}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">pH Range:</p>
                      <p className="text-sm">{selectedCropData.ph.min} - {selectedCropData.ph.max}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Season:</p>
                      <p className="text-sm capitalize">{selectedCropData.growingSeason.join(", ")}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className={`${result?.compatible ? 'bg-green-50' : result ? 'bg-red-50' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle>Compatibility Result</CardTitle>
              <CardDescription>See if your selected soil and crop are compatible</CardDescription>
            </CardHeader>
            <CardContent>
              {!selectedSoil || !selectedCrop ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Select both a soil type and a crop to see compatibility</p>
                </div>
              ) : !result ? (
                <div className="text-center py-8">
                  <p>Analyzing compatibility...</p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className={`p-4 rounded-lg ${result.compatible ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`}>
                    <h3 className={`text-xl font-medium ${result.compatible ? 'text-green-800' : 'text-red-800'}`}>
                      {result.compatible ? 'Compatible! ✓' : 'Not Ideal Match ✗'}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {result.reasons.map((reason, index) => (
                        <li key={index} className="text-sm">{reason}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedSoilData && selectedCropData && (
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Growing Tips:</h4>
                      <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>Ensure soil pH is between {selectedCropData.ph.min} and {selectedCropData.ph.max} for optimal growth.</li>
                        <li>Plant during {selectedCropData.growingSeason.join(" or ")} for best results.</li>
                        <li>{selectedCropData.waterNeeds === "high" ? "Water regularly and thoroughly." : 
                            selectedCropData.waterNeeds === "medium" ? "Provide consistent moisture, but avoid overwatering." : 
                            "Water sparingly, allowing soil to dry between waterings."}</li>
                        <li>Ensure the plant gets {selectedCropData.sunlightNeeds === "full" ? "at least 6-8 hours of direct sunlight" : 
                            selectedCropData.sunlightNeeds === "partial" ? "4-6 hours of sunlight with some shade" : 
                            "protection from direct sunlight and bright indirect light"}.</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoilCropChecker;

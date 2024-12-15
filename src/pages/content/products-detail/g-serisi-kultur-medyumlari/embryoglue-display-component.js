import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Info, Check } from "lucide-react";

const EmbryoGlueDisplay = () => {
  const specifications = [
    {
      title: "Sterility",
      value: "Sterile filtered SAL 10⁻³"
    },
    {
      title: "Mouse Embryo Assay",
      value: "≥ 80% expanded blastocyst within 96 hours (1-cell)"
    },
    {
      title: "Bacterial Endotoxins",
      value: "< 0.25 EU/mL (LAL assay)"
    }
  ];

  const transferSteps = [
    {
      step: "Preparation",
      instructions: [
        "Add ~1 mL of EmbryoGlue® to the well of a rinsed 1-well dish",
        "Add ~2 mL of EmbryoGlue® to the moat of the 1-well dish",
        "Equilibrate dish at +37°C and 6% CO2 for 4–24 hours"
      ]
    },
    {
      step: "Embryo Equilibration",
      instructions: [
        "Equilibrate embryos in EmbryoGlue® for minimum 10 minutes in 6% CO2 environment",
        "Prepare 1 mL non-toxic syringe by rinsing with media from moat until bubble-free"
      ]
    },
    {
      step: "Catheter Preparation",
      instructions: [
        "Draw ~0.5 mL medium from moat",
        "Attach transfer catheter firmly to pre-rinsed syringe",
        "Flush ~0.5–1.0 mL of equilibrated transfer medium through catheter",
        "Draw ~0.1 mL EmbryoGlue® from center well, expel to ~20 µL"
      ]
    },
    {
      step: "Embryo Loading",
      instructions: [
        "Load embryos under microscopic control in 5–10 µL EmbryoGlue®",
        "Follow with small air pocket for better ultrasound imaging"
      ]
    },
    {
      step: "Transfer Procedure",
      instructions: [
        "Insert catheter ~1 cm from top of uterine cavity",
        "Expel embryos in 25–30 µL total volume",
        "Withdraw catheter slowly while maintaining plunger pressure",
        "Perform final microscopic examination of catheter"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">EmbryoGlue®</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Advanced Transfer Medium for Enhanced Implantation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
      {/* Product 1 */}
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                src="/EmbryoGlue_10.png"
                alt="EmbryoGlue 10mL"
                className="object-contain w-full h-40 rounded-lg"
              />
            </div>
            <div className="w-1/2 space-y-2">
              <h2 className="text-xl font-bold text-gray-900">EmbryoGlue®</h2>
              <p className="text-base font-medium text-blue-600">1 x 10 mL</p>
              <p className="text-sm text-gray-500">Code: 10085</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product 2 */}
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                src="/embryoglue_patient.png"
                alt="EmbryoGlue Patient Pack"
                className="object-contain w-full h-40 rounded-lg"
              />
            </div>
            <div className="w-1/2 space-y-2">
              <h2 className="text-xl font-bold text-gray-900">EmbryoGlue® Patient Pack</h2>
              <p className="text-base font-medium text-blue-600">5 x 1.5 mL</p>
              <p className="text-sm text-gray-500">Code: 10168</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

      {/* Product Overview */}
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            <p className="text-gray-600">Bicarbonate buffered medium containing recombinant human albumin, hyaluronan and gentamicin as an antibacterial agent.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Indication for Use</h3>
              <p className="text-gray-600">Medium for embryo transfer</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Application</h3>
              <p className="text-gray-600">For use after equilibration at +37°C and 6% CO2 atmosphere</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specifications */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {specifications.map((spec, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600">{spec.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Transfer Protocol */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transfer Protocol</h2>
        <div className="space-y-6">
          {transferSteps.map((section, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.step}</h3>
                <ul className="space-y-2">
                  {section.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Storage Instructions */}
      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Storage Instructions</h2>
          <p className="text-blue-800 mb-4">Store dark at +2 to +8 °C</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Non-EU Instructions</h3>
              <p className="text-gray-600">Media bottles should not be stored after opening. Discard excess media after completion of the procedure.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">EU Instructions</h3>
              <p className="text-gray-600">Media bottles can be used for up to two weeks after first opening. Use aseptic technique and minimize time outside the refrigerator. Record opening date on bottle.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notices */}
      <div className="bg-red-50 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
          <div className="space-y-2">
            <p className="font-semibold text-red-800">Important Notices:</p>
            <ul className="space-y-2 text-sm text-red-800">
              <li>Caution: Federal (US) law restricts this device to sale by or on the order of a physician.</li>
              <li>Not for injection.</li>
              <li>Discard product if bottle integrity is compromised.</li>
              <li>Do not use if it appears cloudy.</li>
              <li>Do not use in patients with known hypersensitivity/allergy to any of the components.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbryoGlueDisplay;
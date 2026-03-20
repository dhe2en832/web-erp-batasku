import React from 'react';
import { Check } from 'lucide-react';

function FeatureList({ features, columns = 1 }) {
  const gridClass = columns === 2 
    ? 'grid grid-cols-1 md:grid-cols-2 gap-3' 
    : 'space-y-3';

  return (
    <div className={gridClass}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="text-sm text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
import React from 'react';

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="group">
      <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-muted/50 transition-all duration-300 hover:bg-muted">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
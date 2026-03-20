import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function PricingCard({ name, price, features, isPopular = false, onSelect }) {
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 ${
      isPopular 
        ? 'scale-105 ring-2 ring-primary shadow-xl' 
        : 'hover:shadow-lg'
    }`}>
      <CardHeader className="text-center pb-8 pt-8">
        {isPopular && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-full">
              Paling Populer
            </span>
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-8 mt-auto">
        <Button 
          className={`w-full transition-all duration-200 active:scale-[0.98] ${
            isPopular 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
          onClick={onSelect}
        >
          Pilih Paket
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PricingCard;
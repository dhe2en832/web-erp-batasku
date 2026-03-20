import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ModuleCard({ icon: Icon, title, description, features }) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            {features && features.length > 0 && (
              <ul className="mt-4 space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ModuleCard;
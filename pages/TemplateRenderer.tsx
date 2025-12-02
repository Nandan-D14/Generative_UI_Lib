import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../data/registry';

export const TemplateRenderer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const componentData = COMPONENT_REGISTRY.find(c => c.slug === slug && c.category === 'Templates');

  if (!componentData) {
    return <Navigate to="/components" replace />;
  }

  const Component = componentData.component;

  // Render the component directly, assume it handles its own full-page layout
  // We explicitly give it w-full and min-h-screen to ensure it takes up space
  // This is rendered OUTSIDE the standard AppLayout so no header/sidebar.
  return (
    <div className="w-full min-h-screen">
      <Component />
    </div>
  );
};
import './TechSpecs.scss';
import React from 'react';

type Props = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
};
export const TechSpecs: React.FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => {
  const specs = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
    { label: 'Built in memory', value: capacity },
    { label: 'Camera', value: camera },
    { label: 'Zoom', value: zoom },
    { label: 'Cell', value: String(cell) },
  ];

  return (
    <div className="TechSpecs">
      <h3 className="TechSpecs__title">Tech specs</h3>

      {specs.map(
        (spec) =>
          spec.value && (
            <p
              className="TechSpecs__item"
              key={spec.label}
            >
              <span className="TechSpecs__name">{spec.label}</span>
              <span className="TechSpecs__value">{spec.value}</span>
            </p>
          ),
      )}
    </div>
  );
};

import React from 'react';

import type { StepDeliveryProps } from '../CheckoutModal.types';

export const StepDelivery: React.FC<StepDeliveryProps> = ({
  styles,
  arrowDownIcon,
  deliveryOpen,
  deliveryMethod,
  address,
  cityQuery,
  loadingCities,
  citiesOpen,
  filteredCities,
  selectedCity,
  loadingWarehouses,
  warehousesOpen,
  warehouses,
  selectedWarehouse,
  isStep2Valid,
  onToggleDelivery,
  onSelectHome,
  onSelectNovaPoshta,
  onAddressChange,
  onCityFocus,
  onCityBlur,
  onCityQueryChange,
  onSelectCity,
  onToggleWarehouses,
  onSelectWarehouse,
  onContinue,
  onBack,
  normalizeWarehouseText,
}) => {
  return (
    <div className={styles.stepContent}>
      <div className={styles.dropdown}>
        <button
          type="button"
          className={styles.dropdown__button}
          onClick={onToggleDelivery}
        >
          {deliveryMethod === 'home' ? 'Home delivery' : 'Nova Poshta'}

          <span className={styles._arrow}>
            <img
              alt="Dropdown arrow"
              src={arrowDownIcon}
            />
          </span>
        </button>

        {deliveryOpen && (
          <div className={styles.dropdown__list}>
            <div
              className={styles.dropdown__item}
              onClick={onSelectHome}
            >
              Home delivery
            </div>

            <div
              className={styles.dropdown__item}
              onClick={onSelectNovaPoshta}
            >
              Nova Poshta
            </div>
          </div>
        )}
      </div>

      {deliveryMethod === 'home' && (
        <input
          className={styles.input}
          placeholder="Delivery address *"
          value={address}
          maxLength={40}
          onChange={(e) => {
            const cleaned = e.target.value.replace(/\s{2,}/g, ' ').slice(0, 40);

            onAddressChange(cleaned);
          }}
        />
      )}

      {deliveryMethod === 'novapost' && (
        <>
          <div className={styles.dropdown}>
            <input
              className={styles.input}
              placeholder="Type city name *"
              value={cityQuery}
              disabled={loadingCities}
              onFocus={onCityFocus}
              onBlur={onCityBlur}
              onChange={(e) => onCityQueryChange(e.target.value)}
            />

            {loadingCities && (
              <div className={styles.loadingHint}>Loading cities...</div>
            )}

            {!loadingCities && citiesOpen && filteredCities.length > 0 && (
              <div
                className={styles.dropdown__list}
                style={{
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}
              >
                {filteredCities.map((city) => (
                  <div
                    key={city.Ref}
                    className={styles.dropdown__item}
                    onClick={() => onSelectCity(city)}
                  >
                    {city.Description}
                  </div>
                ))}
              </div>
            )}

            {!loadingCities && citiesOpen && filteredCities.length === 0 && (
              <div className={styles.emptyHint}>City not found</div>
            )}
          </div>

          {selectedCity && (
            <div className={styles.dropdown}>
              <button
                type="button"
                className={styles.dropdown__button}
                disabled={loadingWarehouses}
                onClick={onToggleWarehouses}
              >
                {loadingWarehouses ?
                  'Loading warehouses...'
                : selectedWarehouse ?
                  `№${selectedWarehouse.Number} — ${normalizeWarehouseText(selectedWarehouse.Description)}`
                : 'Select branch *'}

                {!loadingWarehouses && (
                  <span className={styles._arrow}>
                    <img
                      alt="Dropdown arrow"
                      src={arrowDownIcon}
                    />
                  </span>
                )}
              </button>

              {warehousesOpen && warehouses.length > 0 && (
                <div
                  className={styles.dropdown__list}
                  style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                  }}
                >
                  {warehouses.map((warehouse) => (
                    <div
                      key={warehouse.Ref}
                      className={styles.dropdown__item}
                      onClick={() => onSelectWarehouse(warehouse)}
                    >
                      <div>{normalizeWarehouseText(warehouse.Description)}</div>

                      {warehouse.Phone && (
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#999',
                          }}
                        >
                          {warehouse.Phone}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}

      <button
        type="button"
        className={styles.primaryBtn}
        onClick={onContinue}
        disabled={!isStep2Valid}
      >
        Continue
      </button>

      <button
        type="button"
        className={styles.secondaryBtn}
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
};

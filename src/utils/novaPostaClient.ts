import { supabase } from './supabaseClient';

export interface City {
  Ref: string;
  Description: string;
}

export interface Warehouse {
  Ref: string;
  Description: string;
  Number: string;
  Address: string;
  Phone: string;
}

interface NovaPostaResponse<T> {
  success: boolean;
  data: T | T[];
  errors?: string[];
  warningsCodes?: string[];
}

// Универсальный вызов Edge Function
async function callNovaPostaAPI<T>(
  method: string,
  properties: Record<string, unknown>,
): Promise<NovaPostaResponse<T>> {
  const { data, error } = await supabase.functions.invoke(
    'get-nova-poshta-data',
    {
      body: { method, properties },
    },
  );

  if (error) {
    console.error('Nova Poshta API call failed:', error);
    throw error;
  }

  return data as NovaPostaResponse<T>;
}

// Получить список городов
export async function getCities(): Promise<City[]> {
  try {
    const data = await callNovaPostaAPI<City>('getCities', {});

    if (!data.success) {
      console.error('Nova Poshta error:', data.errors?.[0]);
      return [];
    }

    return Array.isArray(data.data) ? data.data : [data.data];
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}

interface GetWarehouses {
  cityRef: string;
  language?: 'UA' | 'RU';
  pageSize?: string;
  page?: string;
}

// Получить отделения по городу
export async function getWarehouses(
  params: GetWarehouses,
): Promise<Warehouse[]> {
  try {
    const data = await callNovaPostaAPI<Warehouse>('getWarehouses', {
      CityRef: params.cityRef,
      Language: params.language || 'UA',
      Page: params.page || '1',
      Limit: params.pageSize || '100',
    });

    if (!data.success) {
      console.error('Nova Poshta error:', data.errors?.[0]);
      return [];
    }

    return Array.isArray(data.data) ? data.data : [data.data];
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    return [];
  }
}

interface GetDeliveryPrice {
  cityDeliveryRef: string;
  cityRecipientRef: string;
  serviceType?: string;
}

// Получить стоимость доставки
export async function getDeliveryPrice(params: GetDeliveryPrice): Promise<{
  Cost: string;
  EstimatedDeliveryDay: string;
}> {
  try {
    const data = await callNovaPostaAPI<{
      Cost: string;
      EstimatedDeliveryDay: string;
    }>('getDocumentPrice', {
      CitySender: params.cityDeliveryRef,
      CityRecipient: params.cityRecipientRef,
      Weight: '0.5',
      ServiceType: params.serviceType || 'WarehouseWarehouse',
    });

    if (!data.success) {
      console.error('Nova Poshta error:', data.errors?.[0]);
      return { Cost: '0', EstimatedDeliveryDay: '3-5' };
    }

    const result = Array.isArray(data.data) ? data.data[0] : data.data;

    return result || { Cost: '0', EstimatedDeliveryDay: '3-5' };
  } catch (error) {
    console.error('Error fetching delivery price:', error);
    return { Cost: '0', EstimatedDeliveryDay: '3-5' };
  }
}

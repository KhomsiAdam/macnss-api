export interface MedicineInterface {
  ref: string;
  name: string;
  category: string;
  type: 'A' | 'B' | 'C' | 'D' | 'E';
  price: number;
  refundable: boolean;
}

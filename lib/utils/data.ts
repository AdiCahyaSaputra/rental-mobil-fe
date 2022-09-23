// Interface
import ProductItemInterface from "lib/interface/ProductItemInterface";

export const fakeData: ProductItemInterface[] = [

  { name: 'Toyota', modelYear: '2022', color: 'Merah', owner: 'John Doe' },
  { name: 'Daihatsu', modelYear: '1996', color: 'Hijau', owner: 'Mark Hill' },
  { name: 'Jeep', modelYear: '2013', color: 'Biru', owner: 'Rose Notch' },
  { name: 'Mustibisa', modelYear: '2006', color: 'Kuning', owner: 'Jamal Eron' },
  { name: 'Hyundai', modelYear: '1987', color: 'Hitam', owner: 'George Ben' },
  { name: 'Isuzu', modelYear: '1999', color: 'Pink', owner: 'Natalie Fang' },
  { name: 'Kawasaki', modelYear: '2017', color: 'Coklat', owner: 'Marry Noe' },
  { name: 'Nissan', modelYear: '2001', color: 'Abu-Abu', owner: 'Gary Peter' },

]

export const nameToUrlFriendly = (name: string) => name.toLowerCase().split(' ').join('-')

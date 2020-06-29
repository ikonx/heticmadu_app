import faker from 'faker';
import axios from 'axios';
faker.locale = 'fr';

interface Poi {
  id?: number;
  tags: string[];
  name: string;
  longitude: number;
  latitude: number;
  address: string;
  postalCode: number;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  schedule: string;
  category: string;
  averagePrice: string;
  glutenFree: boolean;
  bio: string;
  disabledAccess: boolean;
  greenScore: number;
  phoneNumber: string;
  picture: string;
  description: string;
  status: string;
  images?: string[];
}

const generatePoi = (): Poi =>
  ({
    tags: [
      faker.random.arrayElement([
        'africain',
        'indien',
        'italien',
        'junkfood',
        'mexicain',
      ]),
    ],
    schedule: '',
    description: faker.company.catchPhraseDescriptor(),
    name: faker.company.companyName(),
    longitude: JSON.parse(faker.address.longitude()),
    latitude: JSON.parse(faker.address.latitude()),
    address: faker.address.streetAddress(),
    postalCode: JSON.parse(faker.address.zipCode()),
    category: faker.random.arrayElement(['restau', 'shop', 'activity']),
    averagePrice: faker.random.arrayElement(['€', '€€', '€€€']),
    glutenFree: faker.random.arrayElement([true, false]),
    bio: '',
    disabledAccess: faker.random.arrayElement([true, false]),
    greenScore: faker.random.number({ min: 3, max: 10, precision: 1 }),
    phoneNumber: faker.phone.phoneNumber(),
    picture: faker.image.food(),
    images: [faker.image.food()],
    status: 'deactivated',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  } as Poi);
export const seeder = () => {
  const pois: Poi[] = [];
  for (let index = 0; index < 10; index += 1) {
    pois.push(generatePoi());
  }
  // pois.forEach(
  //   async (poi) =>
  //     await axios
  //       .post('http://localhost:4000/pois', poi)
  //       .then((res) => console.log(res.data)),
  // );
  //   axios.post("http://localhost:4000/pois", );

  console.log(pois);
};

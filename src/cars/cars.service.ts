import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const cars = await this.prisma.car.findMany({
      select: {
        id: true,
        make: true,
        model: true,
        year: true,
        price: true,
        kilometer: true,
        image: true,
        description: true,
        dealership: {
          select: {
            id: true,
            name: true,
            location: true,
          },
        },
        features: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return cars.map((car) => ({
      ...car,
      dealershipId: car.dealership.id,
    }));
  }
}

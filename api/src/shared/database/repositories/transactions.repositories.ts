import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDto);
  }

  findOne(findOneDto: Prisma.TransactionFindUniqueArgs) {
    return this.prismaService.transaction.findUnique(findOneDto);
  }

  create(createTransactionDto: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createTransactionDto);
  }

  update(updateTransactionDto: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateTransactionDto);
  }

  delete(deleteTransactionDto: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteTransactionDto);
  }
}

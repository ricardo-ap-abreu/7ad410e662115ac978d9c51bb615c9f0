import { Injectable } from '@angular/core';
import { Client } from '../models/client/client';
import { HomeRepository } from '../repositories/home.repository';

@Injectable()
export class HomeService {
  constructor(private homeRepository: HomeRepository) {}

  public async findPerson(socialNumber: string): Promise<Client> {
    try {
      let person = await this.homeRepository.findPerson(socialNumber);
      return person;
    } catch (error) {
      throw error;
    }
  }
}

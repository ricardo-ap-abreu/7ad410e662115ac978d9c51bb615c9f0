import { Injectable } from '@angular/core';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { Client } from '../models/client/client';
import { BackendUrl } from '../models/urls/back-end.url';
import { ClientParser } from './parser/client.parser';

@Injectable({
  providedIn: 'root',
})
export class HomeRepository {
  constructor(
    private findClientParser: ClientParser,
    private remoteGatewayFactory: RemoteGatewayFactory
  ) {}

  public async findPerson(socialNumber: string): Promise<Client> {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const remoteGateway =
        this.remoteGatewayFactory.createDefaultRemoteGateway();
      const data: any = await remoteGateway.getWithHeaders(
        new BackendUrl('/clients?socialNumber=' + socialNumber),
        headers
      );

      return await Promise.resolve(this.findClientParser.parse(data));
    } catch (error) {
      return await Promise.reject(error);
    }
  }
}

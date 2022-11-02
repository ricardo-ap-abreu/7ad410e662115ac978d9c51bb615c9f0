import { Injectable } from '@angular/core';
import { Client } from '../../models/client/client';

@Injectable()
export class ClientParser {
  parse(payload: any): Client {
    const client = new Client();
    if (payload.length == 0) {
      return client;
    }

    client.setName(payload[0].name);
    client.setSituation(payload[0].situation);
    client.setSocialNumber(payload[0].socialNumber);
    return client;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RemoteGateway } from './remote.gateway';
import { environment } from 'src/environments/environment';

@Injectable()
export class RemoteGatewayFactory {
  constructor(private httpClient: HttpClient) {}

  public getBackendUrl(): string {
    return environment.backendUrl;
  }

  createDefaultRemoteGateway(): RemoteGateway {
    return new RemoteGateway(this.getBackendUrl(), this.httpClient);
  }

  createRemoteGateway(backEndUrl: string): RemoteGateway {
    return new RemoteGateway(backEndUrl, this.httpClient);
  }
}

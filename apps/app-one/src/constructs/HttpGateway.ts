import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib';
import { HttpGatewayProps } from '@/types';
// TODO: Should this be the alpha version?
import { IDomainName, CorsHttpMethod, HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import { NodeFunction } from '@subjectwell/swdk';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';

export class HttpGateway extends Construct {
  private props: HttpGatewayProps & StackProps;
  private domain: IDomainName;
  private gateway: HttpApi;

  constructor(scope: Construct, id: string, props: StackProps & HttpGatewayProps) {
    super(scope, id);
    this.props = props;
    this.domain = props.domain;

    this.gateway = new HttpApi(this, `${props.stackName}-gateway`, {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [CorsHttpMethod.ANY],
        allowHeaders: ['*'],
      },
      defaultDomainMapping: {
        domainName: this.domain,
        mappingKey: props.prefix,
      },
    });

    props.routes.forEach((route) => {
      const fn = new NodeFunction(this, route.name, route.lambda, route.dependencies);
      this.gateway.addRoutes({
        ...route.route,
        integration: new HttpLambdaIntegration(`${route.name}-Integration`, fn.function),
      });
    });
  }
}

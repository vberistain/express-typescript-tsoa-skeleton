import { expect } from 'chai';
import { HealthCheckController } from './HealthCheckController';

describe('HealthCheckController', () => {
    describe('get', () => {
        it('should return OK message', async () => {
            const controller = new HealthCheckController();
            expect(controller.get()).to.equal('OK');
        });
    });
});

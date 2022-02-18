import { createApp } from 'Vue';
import VueCookie from '../../src/vue-cookie'

const app = createApp();
app.use(VueCookie);

describe('VueCookie', function(){

    beforeEach(function () {
        this.cookieValue = 'test-value';
        this.cookieKey = 'test-cookie';
        this.cookieDomain = 'localhost';
    });

    it('Should set and retrieve a Cookie with given value', function(){

        app.$cookie.set(this.cookieKey, this.cookieValue, 1);

        expect(app.$cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie and get null when fetching deleted cookie', function(){

        app.$cookie.delete(this.cookieKey);

        expect(app.$cookie.get(this.cookieKey))
            .toBe(null);
    });


    it('Should set and retrieve a Cookie with given value from a domain', function(){

        app.$cookie.set(this.cookieKey, this.cookieValue, {expires: 1, domain: this.cookieDomain});

        expect(app.$cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie with a domain and get null when fetching deleted cookie', function(){

        app.$cookie.delete(this.cookieKey, {domain: this.cookieDomain});

        expect(app.$cookie.get(this.cookieKey))
            .toBe(null);
    });


});

const superagent = require('supertest');
const app = require('./app');
function request(){
    return superagent(app.listen())
}

describe('node api test', function(){
    it('test api test', function(done){
        request()
        .get('/test')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if (err) {
                done(err);
            }
            if (res.body.data = 'hello xiaowang') {
                done();
            }else{
                done(new Error('api test has error'));
            }
        })
    }) 
})
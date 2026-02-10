import http from 'http'


const app = http.createServer()


const PORT = 2608

app.listen(PORT,()=>{

    console.log(`Server Is on: in the http://localhost:${PORT}`);
    

})
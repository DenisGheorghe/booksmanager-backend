require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
const appPort = 4000;


// Initialize middleware 
app.use(express.json());
app.use(cors());

// Inialize routes
const GenericRoutes = require('./routes/generic.routes');
const AutoriRoutes = require('./routes/autori.routes');
const CartiRoutes = require('./routes/carti.routes');
const EdituriRoutes = require('./routes/edituri.routes');
const AdreseRoutes = require ('./routes/adrese.routes');
const CursuriRoutes = require ('./routes/cursuri.routes');
const CursantiRoutes = require ('./routes/cursanti.routes');
const AngajatiRoutes = require ('./routes/angajati.routes');
const Fise_ImprumutRoutes = require ('./routes/fise_imprumut.routes');
const Lista_CartiRoutes = require ('./routes/lista_carti.routes');

//Api Routes
app.use('/', GenericRoutes);
app.use('/api/carti', CartiRoutes);
app.use('/api/autori', AutoriRoutes);
app.use('/api/edituri', EdituriRoutes);
app.use('/api/adrese', AdreseRoutes);    
app.use('/api/cursuri', CursuriRoutes);
app.use('/api/cursanti', CursantiRoutes);
app.use('/api/angajati', AngajatiRoutes);
app.use('/api/fise_imprumut', Fise_ImprumutRoutes);
app.use('/api/lista_carti', Lista_CartiRoutes);

//Start the server
app.listen(appPort, () => {
        console.log(`🚀 App is up and running on port ${appPort}`)

})



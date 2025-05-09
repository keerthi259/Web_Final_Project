const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb+srv://Keerthi1625:Keerthisp123@cluster0.njms3am.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log(" Connection Happened here ")
        await findsomedata(client);
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
        console.log(" We closed our connection")
    }
}
main().catch(console.error);


async function findsomedata(client ){
    const cursor = client.db("youtube").collection("videos").find({});
    const results = await cursor.toArray();
    //console.log(results);
    const js= (JSON.stringify(results));
    console.log(js);

};
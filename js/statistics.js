class Statistics {
    async getStats() {

        const worldStatResponse = await
        fetch('https://covid19.mathdro.id/api/countries/Zimbabwe');
        
        const worldStatData = await worldStatResponse.json();

        return {
            worldData: worldStatData,

        }
    }

}
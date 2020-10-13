module.exports = {
    postPayment: async (request, responese) => {
        try {
            // [model 1]Proses save data to database: user_id, nominal, created_at
            // Berhasil Simpan Response : topupId, user_id, nominal, created_at
            // [model 2]Update Data Saldo, supaya data saldo si user bertambah
            console.log(request.body)
        } catch (error) {
            console.log(error)

        }
    }
}
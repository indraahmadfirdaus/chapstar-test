const { Application } = require('../models')

class ApplicationController {
    static async getApplications(req, res, next) {
        try {
            let applications
            if(req.query.pendiri) {
                applications = await Application.findAll({
                    where: {
                        pendiri: req.query.pendiri
                    }
                })
            } else {
                applications = await Application.findAll()
            }
            res.status(200).json(applications)
        } catch (error) {
            let status = error.status || 500
            let message = error.message || 'Internal Server Error'
            res.status(status).json(message)  
        }
    }

    static async getApplicationById(req, res, next) {
        try {
            let application
                application = await Application.findOne({
                    where: { id: req.params.id }
                })
            res.status(200).json(application)
        } catch (error) {
            let status = error.status || 500
            let message = error.message || 'Internal Server Error'
            res.status(status).json(message)  
        }
    }

    static async postApplication(req, res, next) {
        try {
            let {
                nama_aplikasi,
                keterangan,
                jumlah_pengguna,
                pendiri,
                tanggal_didirikan
            } = req.body;

            let input = {
                nama_aplikasi,
                keterangan,
                jumlah_pengguna,
                pendiri,
                tanggal_didirikan
            }

            const newApp = await Application.create(input);
            res.status(201).json(newApp);
        } catch (error) {
            let status = error.status || 500
            let message = error.message || 'Internal Server Error'
            res.status(status).json(message)
        }
    }

    static async updateApplication(req, res, next) {
        try {
            let {
                nama_aplikasi,
                keterangan,
                jumlah_pengguna,
                pendiri,
                tanggal_didirikan
            } = req.body;

            let input = {
                nama_aplikasi,
                keterangan,
                jumlah_pengguna,
                pendiri,
                tanggal_didirikan
            }

            await Application.update(input, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({ message: "Update Success" });
        } catch (error) {
            let status = error.status || 500
            let message = error.message || 'Internal Server Error'
            res.status(status).json(message)
        }
    }

    static async deleteApplication(req, res, next) {
        try {
            await Application.destroy({ where: { id: req.params.id } })
            res.status(200).json({ message: "Delete Success" })
        } catch (error) {
            let status = error.status || 500
            let message = error.message || 'Internal Server Error'
            res.status(status).json(message)
        }
    }
}

module.exports = ApplicationController
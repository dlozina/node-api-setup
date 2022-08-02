import express, { Application, Request, Response, NextFunction } from "express";

import queryRoutes from './routes/queries';

const port = 3000

export const get = () => {
    const app: Application = express()

    app.use('', queryRoutes)

    // Error Handling Middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction,) => {
        res.status(500).json({message: err.message})
    })

    return app
}

export const start = () => {
    const app = get()
    try {
        if (process.env.NODE_ENV !== 'test') {
            app.listen(port, () => {
                console.log(`Server running on http://localhost:${port}`)
            })
        }
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start()

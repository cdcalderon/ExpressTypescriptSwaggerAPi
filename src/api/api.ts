import {Application} from 'express';

export function initRestApi(app: Application) {

    app.route('/api/test').get( (req, res) => {
        res.status(200).json({"message": 'hello'});
    });
}
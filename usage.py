import th_components
from dash import Dash, callback, html, Input, Output, State
import dash_bootstrap_components as dbc

app = Dash(
    __name__,
    external_stylesheets=[dbc.themes.BOOTSTRAP]
)

app.layout = html.Div([
    th_components.RoundInfoRow(
        id='row',
        is_open=False,
        data={
            'round': 0,
            'opponent': {
                'src': ['https://cdn.statically.io/gh/bradley-erickson/pokesprite/68ce3f7d/pokemon-gen8/regular/lapras.png', 'https://cdn.statically.io/gh/bradley-erickson/pokesprite/68ce3f7d/pokemon-gen8/regular/gengar.png'],
                'name': 'Lapras Gengar'
            },
            'general_notes': 'bruh',
            'games': [
                {
                    'game': 1,
                    'result': 'w',
                    'flip': 1,
                    'you_tags': ['opp dead drew'],
                    'opp_tags': ['opp dead drew'],
                    'notes': 'Opponent draw passed for the first 3 turns.'
                },
                {
                    'game': 2,
                    'result': 'l',
                    'flip': 2,
                    'you_tags': ['opp dead drew'],
                    'opp_tags': ['opp dead drew'],
                    'notes': 'notes'
                },
                {
                    'game': 3,
                    'result': '',
                    'flip': '',
                    'you_tags': [],
                    'opp_tags': [],
                    'notes': ''
                }
            ]
        }
    ),
    html.Button('click', id='button')
])

@callback(
    Output('row', 'is_open'),
    Input('button', 'n_clicks'),
    State('row', 'is_open'),
)
def open_close(clicks, is_open):
    if clicks:
        return not is_open
    return is_open


if __name__ == '__main__':
    app.run_server(debug=True, port=8888)

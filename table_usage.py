import th_components
from dash import Dash, callback, html, Input, Output, State
import dash_bootstrap_components as dbc

app = Dash(
    __name__,
    external_stylesheets=[dbc.themes.BOOTSTRAP, dbc.icons.FONT_AWESOME]
)

app.layout = html.Div([
    th_components.EditableTable(
        data=[{'winner': 'p1', 'first': 'p2', 'p1Tags': ['bro'], 'p2Tags': []}],
        id='input',
        persistence_type='local'
    ),
    html.Div(id='output')
])


@callback(
    Output('output', 'children'),
    Input('input', 'data'),
)
def open_close(data):
    return str(data)


if __name__ == '__main__':
    app.run_server(debug=True, port=8888)

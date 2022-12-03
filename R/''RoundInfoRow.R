# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''RoundInfoRow <- function(id=NULL, class_name=NULL, data=NULL, loading_state=NULL) {
    
    props <- list(id=id, class_name=class_name, data=data, loading_state=loading_state)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RoundInfoRow',
        namespace = 'th_components',
        propNames = c('id', 'class_name', 'data', 'loading_state'),
        package = 'thComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}

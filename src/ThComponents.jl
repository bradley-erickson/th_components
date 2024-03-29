
module ThComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.2"

include("jl/editabletable.jl")
include("jl/roundinforow.jl")
include("jl/simplegamerow.jl")
include("jl/swtichtoggle.jl")
include("jl/taginput.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "th_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "th_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "th_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end

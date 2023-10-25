import ToolSection from '../components/tool_section';


export default function Tools() {
    return (
        <>
            <div className="tools_container">
                <h1>this is tool page</h1>
                <ToolSection
                    tool_icon="/webapp.png"
                    tool_name="HTML+CSS+JS"
                    tool_des="The most basic web app development combo"
                    example_path="/programs-web/cinema.html"
                />
            </div>
        </>
    );
}
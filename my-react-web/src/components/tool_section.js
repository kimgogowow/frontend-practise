import React from 'react';

export default function ToolSection({ tool_icon, tool_name, tool_des, example_path }) {
    return (
        <>
            <div className="tool_container">
                <div className="tool_icon">
                    <img src={tool_icon} alt="Tool Icon" />
                </div>
                <div className="tool_txt">
                    <a className="tool_name">
                        {tool_name}
                    </a>
                    <a className="description">
                        {tool_des}
                    </a>
                </div>
                <div className='link'>
                    <a href={example_path}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}

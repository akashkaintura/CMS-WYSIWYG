import React, { useEffect } from "react";
import plugins from "../plugins.config";

const PluginManager = () => {
    useEffect(() => {
        plugins.forEach(async (plugin) => {
            try {
                const pluginModule = await import(plugin.path);
                if (pluginModule.default) {
                    pluginModule.default();
                }
            } catch (error) {
                console.error(`Failed to load plugin: ${plugin.name}`, error);
            }
        });
    }, []);

    return <div>Plugins loaded dynamically!</div>;
};

export default PluginManager;

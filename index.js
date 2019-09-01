module.exports = function smtDetector(mod) 
{
    let enabled = true;

    mod.command.add('dropparty', () => {
        enabled = !enabled;
        mod.command.message('Dropping Party automatically: ' + enabled);
    });

    mod.hook('S_SYSTEM_MESSAGE', 1, (event) => {
            const msg = mod.parseSystemMessage(event.message);
            if(enabled && (msg.id == 'SMT_TELEPORT_NOTIFY' && event.message.includes("creature:1023#7000")))
            {
                mod.toServer('C_LEAVE_PARTY',1, {
                });
            }
    });



}
let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 CazperBotz-V3 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 5k/grup (2 minggu)
    ┊⫹⫺ Normal: 15k/grup (2 bulan)
    ┊⫹⫺ Standar: 30k/grup (3 bulan)
    ┊⫹⫺ Pro: 35k/grup (5 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Pro: 40k (4 bulan)
    ┊⫹⫺ Vip: 50k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 80k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Smartfren: [08886529913]
    • Dana: [08886529913]
    • Gopay: [08886529913]
    • Ovo: [08886529913]
    • Link Aja: [08886529913]
    
    Nomor Owner :
    wa.me/628886529913
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY CASPERAGARIO DEV`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler

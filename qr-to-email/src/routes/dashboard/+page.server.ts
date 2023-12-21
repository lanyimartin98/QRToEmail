import { queueSchema } from "$lib/schemas.js";
import { setError, superValidate,setMessage } from "sveltekit-superforms/client";

export const load = (async ({locals}) => {
    const { data } = await locals.supabase.from("emailQueue").select();
    const queueForm = await superValidate(queueSchema);
    return { queueForm, queue: data ?? [] };
  });

export const actions = {
    appendToQueue: async ({ request, locals: { supabase } }) => {
        const formdata:FormData = await request.formData();
            const queueForm = await superValidate(formdata, queueSchema);
            const sendTo = queueForm.data.sendTo;
            const message = queueForm.data.message;
            
            const file=formdata.get('attachment');
            if(file instanceof File){
            
            const attachment = file as File;
            if(attachment.name!=='undefined'){
            const fileUpload = await supabase
                .storage
                .from('Sendables')
                .upload(attachment.name, attachment, {
                    cacheControl: '3600',
                    upsert: false
                })

            if(fileUpload.error){
                return setError(queueForm,"attachment",'Internal server error! Please try again later!');
            }
        }
            
            const insertion =await supabase.from('emailQueue').insert([{
                sendTo:sendTo,
                message:message,
                attachment:(attachment.name==='undefined')?null:attachment.name,
                status:0
            }])

            if(insertion.error){
                return setError(queueForm,"attachment",'Internal server error! Please try again later!');
            }
        return setMessage(queueForm,'success');
    }
}
}

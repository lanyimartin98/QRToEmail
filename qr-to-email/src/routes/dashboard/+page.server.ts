import { queueSchema } from "$lib/schemas.js";
import { redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms/client";

export const load = (async ({locals}) => {
    const queueForm = await superValidate(queueSchema);
    return { queueForm };
  });

export const actions = {
    appendToQueue: async ({ request, locals: { supabase } }) => {
        const queueForm = await superValidate(request, queueSchema);
            const sendTo = queueForm.data.sendTo;
            const message = queueForm.data.message;
            const formdata:FormData = await request.formData();

            const file=formdata.get('attachment');
            if(file instanceof File){
            
            const attachment= file as File;
            const fileUpload= await supabase
                .storage
                .from('Sendables')
                .upload(attachment.name, attachment, {
                    cacheControl: '3600',
                    upsert: false
                })

            if(fileUpload.error){
                return setError(queueForm,'Error happened during the upload! Please try again later');
            }
            
            const insertion =await supabase.default.from('emailQueue').insert([{
                sento:sendTo,
                message:message,
                attachment:attachment.name
            }])

            if(insertion.error){
                return setError(queueForm,'Error happened during the insertion! Please try again later');
            }

            throw redirect(303,'/');
    }
}
}
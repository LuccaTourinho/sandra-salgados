'use client';

import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

//name, email, tel, msg

const contactSchema = z.object({
    Name: z
            .string()
            .trim()
            .min(1, { message: "Precisa preencher o nome." }),
    Email: z
            .string()
            .trim()
            .min(1, { message: "Precisa preencher o email." })
            .email({ message: "Precisa preencher um email válido." }),
    Tel: z
            .string()
            .trim()
            .min(1, { message: "Precisa preencher o telefone." })
            .regex(/^\+?\d{9,15}$/, { message: "Precisa preencher um telefone válido." }),
    Msg: z
            .string()
            .trim()
            .min(1, { message: "Precisa preencher a mensagem." }),
});

type ContactType = z.infer<typeof contactSchema>;

function validateField <K extends keyof ContactType> (field: K, value: string){
    const singleFieldSchema = z.object({[field]: contactSchema.shape[field]});
    return singleFieldSchema.safeParse({[field]: value});
}

const ContactForm = () => {
    const [alert, setAlert] = useState<string|null>(null);
    const [fieldErros, setFieldErrors] = useState<Record<string,string|null>>({});

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            isSubmitting,
        },
        reset
    } = useForm<ContactType>({
        resolver: zodResolver(contactSchema),
    });

    const handleValidation = (field: keyof ContactType, value: string) => {
        try{
            setValue(field, value);
            const validation = validateField(field, value);
            if(validation.success){
                setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: null,
                }));
            }else{
                const errorMessages = validation.error.errors.map((err) => err.message).join(" \n");
                setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: errorMessages || 'Erro desconhecido',
                }));
            }
        }catch(error){
            if(error instanceof z.ZodError){
                const errorMessages = error.errors.map((err) => err.message).join(" \n");

                setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: errorMessages || 'Erro desconhecido',
                }));
            }else{
                console.error("Erro desconhecido: ", error);
            }
        }
    };

    const formatErrorMessages = (errors: string) => {
        return errors.split('\n').map((line, index) => (
            <span key={index}>{line}<br/></span>
        ));
    };

    const onSubmit = async (data: ContactType) => {
        console.log(data);
        try{
            console.log("Formulário enviado com sucesso!: ", data);
            setAlert("Messagem enviada com sucesso!");
        }catch(error){
            console.error("Error: ", error);
            setAlert("Um erro ocorreu enquanto o formulário estava sendo enviado.");
        }finally{
            reset();
        }
    };

    useEffect(() => {
        ['Name', 'Email', 'Tel', 'Msg'].forEach((fieldChoosen) => {
            handleValidation(fieldChoosen as keyof ContactType, '');
        });
    }, []);

    useEffect(() => {
        if(alert){
            const timer = setTimeout(() => {
                setAlert(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

  return (
    <div className="w-full h-[500px] bg-primary-800 rounded-xl py-2 xl:py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-around gap-2 px-2 lg:px-4 h-full"
      >
        {/* Mensagem inicial */}
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg lg:text-xl xl:text-2xl text-background-50 font-semibold">
                Pode mandar um Email aqui
            </h2>
            <p className="text-background-50 text-wrap text-xs lg:text-md">
                Interessado nos meus servicos, desejo que eu faca 
                um evento ao invés de fazer apenas um produto?
                Mande um email aqui para mim.
            </p>
        </div>
        <div className="flex flex-col item-center justify-between gap-1 w-full">
            {/* Name */}
            <div className="flex flex-col gap-1">
                <Input
                    type="text"
                    placeholder="Nome"
                    {...register("Name")}
                    onChange={(e) => handleValidation("Name", e.target.value)}
                />
                {fieldErros.Name && (
                    <p className="text-sm text-red-500">
                        {formatErrorMessages(fieldErros.Name)}
                    </p>
                )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
                <Input
                    type="email"
                    placeholder="Email"
                    {...register("Email")}
                    onChange={(e) => handleValidation("Email", e.target.value)}
                />
                {fieldErros.Email && (
                    <p className="text-sm text-red-500">
                        {formatErrorMessages(fieldErros.Email)}
                    </p>
                )}
            </div>

            {/* Tel */}
            <div className="flex flex-col gap-1">
                <Input
                    type="tel"
                    placeholder="Telefone"
                    {...register("Tel")}
                    onChange={(e) => handleValidation("Tel", e.target.value)}
                />
                {fieldErros.Tel && (
                    <p className="text-sm text-red-500">
                        {formatErrorMessages(fieldErros.Tel)}
                    </p>
                )}
            </div>

            {/* Msg */}
            <div className="flex flex-col gap-1">
                <Textarea
                    placeholder="Escreva sua mensagem"
                    {...register("Msg")}
                    onChange={(e) => handleValidation("Msg", e.target.value)}
                />
                {fieldErros.Msg && (
                    <p className="text-sm text-red-500">
                        {formatErrorMessages(fieldErros.Msg)}
                    </p>
                )}
            </div>

            {/* Button */}
            <div className="flex flex-col gap-1 items-center">
                <Button
                    type="submit"
                    className="max-w-40"
                    disabled={isSubmitting}
                    size={'sm'}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
                {alert && <p className="text-sm text-background-50">{alert}</p>}
            </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;


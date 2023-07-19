import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Review } from 'types/review';

import './styles.css';




type Props = {
    movieId: string;
    onInsertReview: (review: Review) => void;
}

type FormData = {
    movieId: number;
    text: string;
}

const ReviewForm = ({movieId, onInsertReview} : Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {

        formData.movieId = parseInt(movieId);
        console.log(formData)

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            data: formData,
            withCredentials: true
        };

        requestBackend(config)
        .then(response => {
            setValue('text', '');
            onInsertReview(response.data);
            console.log("SUCESSO AO SALVAR" ,response);
        })
        .catch(errors => {
            console.log("ERRO AO SALVAR", errors);
        });
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                        {...register('text', {
                            required: 'campo obrigatório',
                        })}
                        type="text"
                        name="text"
                        placeholder="Digite sua avaliação aqui"
                        />
                        <div>
                            {errors.text?.message}
                        </div>
                    </div>
                    <button type="submit">
                        SALVAR AVALIAÇÃO
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
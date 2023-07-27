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
        <div className="reviewForm-card base-card">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <input
                        {...register('text', {
                            required: 'campo obrigatório',
                        })}
                        type="text"
                        name="text"
                        placeholder="Digite sua avaliação aqui"
                        className="form-control base-input"
                        />
                        <div>
                            {errors.text?.message}
                        </div>
                    </div>
                    <button type="submit" className="btn-container btn btn-primary">
                        <h6>SALVAR AVALIAÇÃO</h6>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
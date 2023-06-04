import * as Yup from 'yup'

export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string().email("فرمت ایمیل وارد شده اشتباه است").required("ایمیل الزامی می باشد"),
    subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
    message: Yup.string().required("نوشتن پیام الزامی می باشد"),
    recaptcha: Yup.string().required("کپچا الزامی می باشد")
})
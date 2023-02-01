import { schema } from './Validation';
import { Oval } from 'react-loader-spinner';
import { useImageLoaded } from '../../hooks/useImageLoaded';
import {
  Button,
  Img,
  Input,
  Wrapper,
  Title,
  Form,
  Validation,
  Lable,
  Placeholder,
  WrapperForm,
  Div,
  WrapperLoaded,
} from './CollbackForm.styled';
import icons from '../../images/sprite.svg';
import { useFormik } from 'formik';
import formSmX1 from '../../images/form/form-sm@-x1.png';
import formMdX1 from '../../images/form/form-md@-x1.png';
import formMdX2 from '../../images/form/form-md@-x2.png';
import formLgX1 from '../../images/form/form-lg@-x1.png';
import formLgX2 from '../../images/form/form-lg@-x2.png';
import formWebX1 from '../../images/form/contact.webp';
import formWebX2 from '../../images/form/contact@2x.webp';

const CollbackForm = () => {
  const [ref, loaded, onLoad] = useImageLoaded();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: schema,
  });

  return (
    <Wrapper>
      <Div>
        <picture>
          <source
            type="image/jpeg"
            media="screen and (min-width: 1360px)"
            srcSet={`
                    ${formLgX1} 1x,
                    ${formLgX2} 2x
                  `}
          />
          <source
            type="image/jpeg"
            media="screen and (min-width: 769px)"
            srcSet={`
                    ${formLgX1} 1x,
                    ${formLgX2} 2x
                  `}
          />
          <source
            type="image/jpeg"
            media="screen and (min-width: 768px)"
            srcSet={`
                    ${formMdX1} 1x,
                    ${formMdX2} 2x
                  `}
          />

          <Img
            ref={ref}
            onLoad={onLoad}
            type="image/web"
            srcSet={`
            ${formWebX1} 2x,
            ${formWebX2} 1x,
            `}
            src={formSmX1}
            alt="фото"
          />
          {loaded && (
            <WrapperLoaded>
              <Oval
                height={80}
                width={80}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </WrapperLoaded>
          )}
        </picture>
      </Div>

      <WrapperForm>
        <Form
          name="contact"
          action="/contact"
          method="POST"
          data-netlify="true"
          netlify
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <input type="hidden" name="bot-field"></input>
          <Title>Request Callback</Title>
          <Lable>
            <Input
              placeholder="value"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            ></Input>
            <Placeholder>Enter your name</Placeholder>
          </Lable>
          <Lable>
            <Input
              placeholder="value"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            ></Input>
            <Placeholder>Enter email*</Placeholder>
            {formik.errors.email && formik.touched.email ? (
              <Validation>
                <svg>
                  <use href={`${icons}#worning`}></use>
                </svg>
                <span>{formik?.errors?.email}</span>
              </Validation>
            ) : null}
          </Lable>
          <Button
            disabled={
              Boolean(!formik.values.email) || Boolean(formik.errors.email)
            }
            errors={formik.errors.email}
            touched={formik.touched.email}
            type="submit"
          >
            Send
          </Button>
        </Form>
      </WrapperForm>
    </Wrapper>
  );
};

export default CollbackForm;

import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function EditMyPage(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        cord: "",
        department: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("이름을 꼭 입력해주세요!"),
        email: Yup.string()
          .email("이메일 형식에 맞지 않습니다")
          .required("이메일을 꼭 입력해주세요"),
        password: Yup.string()
          .min(6, "비밀번호는 최소 6자리 이상입니다.")
          .required("비밀번호를 꼭 입력해주세요!"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
          .required("확인 비밀번호를 꼭 입력해주세요!"),
        cord: Yup.number()
          .typeError("숫자만 입력해주세요")
          .required("기수를 꼭 적어주세요!, 지원자라면 0을 적어주세요"),
        department: Yup.string().required("학과를 꼭 적어주세요!"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            cord: values.cord,
            department: values.department,
            image: "../../../images/profile.png",
          };

          dispatch(registerUser(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg);
            }
          });

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>회원 가입</h2>
            <Form
              style={{ minWidth: "375px" }}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >
              <Form.Item
                required
                label="이메일 (ID)"
                hasFeedback
                validateStatus={
                  errors.email && touched.email ? "error" : "success"
                }
              >
                <Input
                  id="email"
                  placeholder="사용하실 이메일을 입력해주세요"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="비밀번호"
                hasFeedback
                validateStatus={
                  errors.password && touched.password ? "error" : "success"
                }
              >
                <Input
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="비밀번호 확인" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item required label="이름">
                <Input
                  id="name"
                  placeholder="이름을 입력해주세요"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="기수">
                <Input
                  id="cord"
                  placeholder="기수를 입력해주세요. 기수가 없는 경우 0으로 적어주세요"
                  type="text"
                  value={values.cord}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.cord && touched.cord
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.cord && touched.cord && (
                  <div className="input-feedback">{errors.cord}</div>
                )}
              </Form.Item>

              <Form.Item required label="학과">
                <Input
                  id="department"
                  placeholder="학과를 입력해주세요"
                  type="text"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.department && touched.department
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.department && touched.department && (
                  <div className="input-feedback">{errors.department}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}
                >
                  고대 멋사 가입하기
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default EditMyPage;

import React, { Component } from 'react'
import { Form, createBrowserRouter, RouterProvider, useLoaderData, Link, useActionData, redirect } from 'react-router-dom'
import { getInvoice } from './data'
const Home = () => {
  return <div>
    Home
    <Link to='/projects/1998'>跳转到/projects/1998</Link>
  </div>
}
const About = () => {
  let submit = useActionData();
  console.log(submit);
  return <div>
    About
  </div>
}
const Test = () => {
  let submit = useActionData();
  console.log(submit);
  return <div>
    Test
  </div>
}
function Project() {
  let project = useLoaderData();
  let submit = useActionData();
  console.log('Project', submit);
  return (
    <>
      <Form method="post">
        <input
          type="text"
          name="projectName"
          defaultValue={project.name}
        />
        <button type="submit">Update Project</button>
      </Form>

      <Form method="delete" action='/test'>
        <button type="submit">Delete Project</button>
      </Form>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/', element: <Home></Home>,
  },
  {
    path: '/test', element: <Test></Test>, action: async ({ request, params }) => {
      return { aa: 33 }
    }
  },
  {
    path: '/about', element: <About></About>
    // ,
    // loader: async ({ params }) => {
    //   console.log('about-params', params);
    //   // return fakeLoadProject(params.id);
    //   return { c: 4 };
    // },
    // action: async ({ request, params }) => {

    //   let formData = await request.formData();
    //   console.log(request, params, formData.get('name'))
    // }
  },
  {
    path: "/projects/:id",
    element: <Project />,
    loader: async ({ params }) => {
      console.log('project-loader-params', params);
      return getInvoice(params.id);
    },
    action: async ({ request, params }) => {
      console.log("project-action", request, params)
      switch (request.method) {
        case "POST": {
          let formData = await request.formData();
          let name = formData.get("projectName");
          console.log("project-action-post", formData, name);
          return redirect("/about");
          return { name: name };
        }
        case "DELETE": {
          return { id: 333 }
        }
        default: {
          throw new Response("", { status: 405 });
        }
      }
    }
  }
])



export default function FormPage() {
  return (

    <RouterProvider router={router}>

    </RouterProvider>
  )
}

/*
1.useActionData:此钩子提供从上一个导航的操作结果返回的值，如果没有提交，则返回未定义的值。
此挂钩最常见的用例是表单验证错误。如果表单不正确，您可以返回错误并让用户重试

2.每当应用程序向您的路线发送非获取提交（“post”、“put”、“patch”、“delete”）时，都会调用操作。

当点击project中的提交按钮，触发了post,delete请求，router中的project路由中的action就会触发，action返回的值可以通过useActionData()获取。

*/

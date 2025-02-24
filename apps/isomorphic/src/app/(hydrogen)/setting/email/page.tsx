'use client';

import dynamic from 'next/dynamic';
import { Controller, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
// import { PiClock, PiEnvelopeSimple } from 'react-icons/pi';
import FormGroup from '@/app/shared/form-group';
import {
    defaultValues,
    personalInfoFormSchema,
    PersonalInfoFormTypes,
} from '@/validators/personal-info.schema';
import FormFooter from '@core/components/form-footer';
import { Form } from '@core/ui/form';
import { Loader, Text } from 'rizzui';

const QuillEditor = dynamic(() => import('@core/ui/quill-editor'), {
    ssr: false,
});

export default function Communication() {
    const onSubmit: SubmitHandler<PersonalInfoFormTypes> = (data) => {
        toast.success(<Text as="b">Successfully added!</Text>);
        console.log('Profile settings data ->', {
            ...data,
        });
    };

    return (
        <Form<PersonalInfoFormTypes>
            validationSchema={personalInfoFormSchema}
            // resetValues={reset}
            onSubmit={onSubmit}
            className="@container"
            useFormProps={{
                mode: 'onChange',
                defaultValues,
            }}
        >
            {({ register, control, setValue, getValues, formState: { errors } }) => {
                return (
                    <>
                        <FormGroup
                            title="Add List"
                            description="Update your photo and personal details here"
                            className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
                        />

                        <div className="mb-10 grid grid-cols-2 gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
                            <div>
                                <FormGroup
                                    title="Template"
                                    className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
                                >
                                    <Controller
                                        control={control}
                                        name="bio"
                                        render={({ field: { onChange, value } }) => (
                                            <QuillEditor
                                                value={value}
                                                onChange={onChange}
                                                className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
                                                labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
                                            />
                                        )}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <FormFooter
                            // isLoading={isLoading}
                            altBtnText="Cancel"
                            submitBtnText="Save"
                        />
                    </>
                );
            }}
        </Form>
    );
}

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { patientValidationSchema } from 'validationSchema/patients';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { PatientInterface } from 'interfaces/patient';

function PatientCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: PatientInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.patient.create({ data: values as RoqTypes.patient });
      resetForm();
      router.push('/patients');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PatientInterface>({
    initialValues: {
      medical_history: '',
      emergency_contact: '',
      insurance_provider_id: (router.query.insurance_provider_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
      preferred_healthcare_provider_id: (router.query.preferred_healthcare_provider_id as string) ?? null,
    },
    validationSchema: patientValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Patients',
              link: '/patients',
            },
            {
              label: 'Create Patient',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Patient
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.medical_history}
            label={'Medical History'}
            props={{
              name: 'medical_history',
              placeholder: 'Medical History',
              value: formik.values?.medical_history,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.emergency_contact}
            label={'Emergency Contact'}
            props={{
              name: 'emergency_contact',
              placeholder: 'Emergency Contact',
              value: formik.values?.emergency_contact,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<InsuranceProviderInterface>
            formik={formik}
            name={'insurance_provider_id'}
            label={'Select Insurance Provider'}
            placeholder={'Select Insurance Provider'}
            fetcher={() => roqClient.insurance_provider.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<HealthcareProviderInterface>
            formik={formik}
            name={'preferred_healthcare_provider_id'}
            label={'Select Healthcare Provider'}
            placeholder={'Select Healthcare Provider'}
            fetcher={() => roqClient.healthcare_provider.findManyWithCount({})}
            labelField={'specialty'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/patients')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'patient',
    operation: AccessOperationEnum.CREATE,
  }),
)(PatientCreatePage);

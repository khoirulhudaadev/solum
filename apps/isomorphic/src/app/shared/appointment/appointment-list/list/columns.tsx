'use client';

import { HeaderCell } from '@/app/shared/table';
import { Text, Checkbox, ActionIcon, Tooltip, Select } from 'rizzui';
import EyeIcon from '@core/components/icons/eye';
import AvatarCard from '@core/ui/avatar-card';
import AvatarCard2 from '@core/ui/avatar-card2';
import DeletePopover from '@/app/shared/delete-popover';
import DateCell from '@core/ui/date-cell';
import { Type } from '@/data/appointment-data';
import { useState } from 'react';
import { PiCheckCircleBold, PiClockBold, PiCopy } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import CreateUpdateAppointmentForm from '../appointment-form';
import AppointmentDetails from './appointment-details';

const statusOptions = [
  { label: 'Waiting', value: 'Waiting' },
  { label: 'Scheduled', value: 'Scheduled' },
];

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const GetColumns = ({
  handleSelectAll,
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  data,
  checkedItems,
  onChecked,
}: Columns) => {
  return [
    {
      title: (
        <div className="ps-3.5">
          <Checkbox
            title={'Select All'}
            onChange={handleSelectAll}
            checked={checkedItems.length === data.length}
            className="cursor-pointer"
          />
        </div>
      ),
      dataIndex: 'checked',
      key: 'checked',
      width: 30,
      render: (_: any, row: any) => (
        <div className="inline-flex ps-3.5">
          <Checkbox
            aria-label={'ID'}
            className="cursor-pointer"
            checked={checkedItems.includes(row.id)}
            {...(onChecked && { onChange: () => onChecked(row.id) })}
          />
        </div>
      ),
    },
    {
      title: <HeaderCell title="ID" />,
      onHeaderCell: () => onHeaderCellClick('id'),
      dataIndex: 'id',
      key: 'id',
      width: 130,
      render: (id: string) => <Text>#{id}</Text>,
    },
    {
      title: <HeaderCell title="PATIENT NAME" />,
      onHeaderCell: () => onHeaderCellClick('patient.name'),
      dataIndex: 'patient',
      key: 'patient',
      width: 250,
      render: (patient: { name: string; email: string }) => (
        <div>
          <p className="flex items-center gap-2 font-medium text-gray-700">
            {patient.name}
            <PiCopy className="cursor-pointer active:scale-[0.99]" />
          </p>
          <p className="flex items-center gap-2 font-medium text-gray-700">
            {patient.email}
            <PiCopy className="cursor-pointer active:scale-[0.99]" />
          </p>
        </div>
      ),
    },
    {
      title: (
        <HeaderCell title={<span className="whitespace-nowrap">DATE</span>} />
      ),
      dataIndex: 'date',
      key: 'date',
      width: 250,
      render: (createdDate: Date) => <DateCell date={createdDate} />,
    },
    {
      title: <HeaderCell title="Appointed to" />,
      onHeaderCell: () => onHeaderCellClick('doctor.name'),
      dataIndex: 'doctor',
      key: 'doctor',
      width: 320,
      render: (doctor: { name: string; email: string; avatar: string, number: string }) => (
        <AvatarCard2
          number={doctor.number}
          src={doctor.avatar}
          name={doctor.name}
          description={doctor.email}
        />
      ),
    },
    {
      title: (
        <HeaderCell
          title={<span className="whitespace-nowrap">APPOINT TYPE</span>}
          sortable
          ascending={
            sortConfig?.direction === 'asc' && sortConfig?.key === 'type'
          }
        />
      ),
      dataIndex: 'appointType',
      key: 'appointType',
      width: 180,
      onHeaderCell: () => onHeaderCellClick('appointType'),
      render: (type: Type) => (
        <>
          <p className="whitespace-nowrap font-medium text-gray-900">
            {type}
          </p>
          <p className="whitespace-nowrap font-medium text-gray-500">
            Reminder Sent
          </p>
        </>
      ),
    },
    {
      title: <HeaderCell title="APPOINT STATUS" />,
      onHeaderCell: () => onHeaderCellClick('appointStatus'),
      dataIndex: 'appointStatus',
      key: 'appointStatus',
      width: 250,
      render: (value: string) => (
        <>
          <p className={`whitespace-nowrap font-medium ${value === 'Schedule' ? 'text-green-400' : value === 'Cancelled' ? 'text-red-400' : value === 'Waiting' ? 'text-yellow-400' : 'text-blue-400'}`}>
            {value}
          </p>
          {
            value === 'Schedule' || value === 'SCHEDULE' ? (
              <p className={`whitespace-nowrap font-medium text-gray-700`}>
                Reschedule From Previous Date
              </p>
            ) :
              <></>
          }
        </>
      )
    },
    {
      title: (
        <HeaderCell
          title="PAYMENT STATUS"
          sortable
          ascending={
            sortConfig?.direction === 'asc' && sortConfig?.key === 'status'
          }
        />
      ),
      dataIndex: 'status',
      key: 'status',
      width: 260,
      onHeaderCell: () => onHeaderCellClick('status'),
      render: (status: string) => (
        <span className={`${status === 'Paid' ? 'text-green-400' : status === 'Unpaid' ? 'text-red-400' : 'text-blue-400'}`}>
          {status}
        </span>
      )
    },
    {
      title: <></>,
      dataIndex: 'action',
      key: 'action',
      width: 120,
      render: (_: string, row: any) => (
        <RenderAction row={row} onDeleteItem={onDeleteItem} />
      ),
    },
  ];
};

function StatusSelect({ selectItem }: { selectItem?: string }) {
  const selectItemValue = statusOptions.find(
    (option) => option.label === selectItem
  );
  const [value, setValue] = useState(selectItemValue);
  return (
    <Select
      dropdownClassName="!z-10 h-auto"
      placeholder="Select Role"
      options={statusOptions}
      value={value}
      onChange={setValue}
      displayValue={(option: { value: any }) =>
        renderOptionDisplayValue(option.value as string)
      }
    />
  );
}

function renderOptionDisplayValue(value: string) {
  switch (value) {
    case 'Scheduled':
      return (
        <div className="flex items-center">
          <PiClockBold className="shrink-0 fill-green-dark text-base" />
          <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
            {value}
          </Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <PiCheckCircleBold className="shrink-0 fill-orange text-base" />
          <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
            {value}
          </Text>
        </div>
      );
  }
}

function RenderAction({
  row,
  onDeleteItem,
}: {
  row: any;
  onDeleteItem: (id: string) => void;
}) {
  const { openModal, closeModal } = useModal();
  function handleCreateModal() {
    closeModal(),
      openModal({
        view: <CreateUpdateAppointmentForm />,
        customSize: '700px',
      });
  }
  return (
    <div className="flex items-center justify-end gap-3 pe-3">
      <Tooltip
        size="sm"
        content={'View Appointment'}
        placement="top"
        color="invert"
      >
        <ActionIcon
          as="span"
          size="sm"
          variant="outline"
          aria-label={'View Appointment'}
          className="hover:!border-gray-900 hover:text-gray-700"
          onClick={() =>
            openModal({
              view: (
                <AppointmentDetails
                  data={row}
                  onDelete={() => onDeleteItem(row.id)}
                  onEdit={handleCreateModal}
                />
              ),
              customSize: '900px',
            })
          }
        >
          <EyeIcon className="h-4 w-4" />
        </ActionIcon>
      </Tooltip>
      <DeletePopover
        title={`Delete the appointment`}
        description={`Are you sure you want to delete this #${row.id} appointment?`}
        onDelete={() => onDeleteItem(row.id)}
      />
    </div>
  );
}
